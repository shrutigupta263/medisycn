import { useState, useRef, useCallback } from "react";
import { Upload, X, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface FileUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface UploadedFile {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  id: string;
}

export const FileUploadDialog = ({ open, onOpenChange }: FileUploadDialogProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = useCallback((files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const validFiles = fileArray.filter(file => {
      const isValidType = file.type === 'application/pdf' || 
                         file.type.startsWith('image/') || 
                         file.name.endsWith('.txt') ||
                         file.name.endsWith('.doc') ||
                         file.name.endsWith('.docx');
      
      if (!isValidType) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type.`,
          variant: "destructive"
        });
        return false;
      }
      
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: "File too large",
          description: `${file.name} exceeds the 10MB size limit.`,
          variant: "destructive"
        });
        return false;
      }
      
      return true;
    });

    validFiles.forEach(file => {
      const fileId = Math.random().toString(36).substr(2, 9);
      const uploadFile: UploadedFile = {
        file,
        progress: 0,
        status: 'uploading',
        id: fileId
      };

      setUploadedFiles(prev => [...prev, uploadFile]);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadedFiles(prev => prev.map(f => {
          if (f.id === fileId) {
            const newProgress = f.progress + Math.random() * 20;
            if (newProgress >= 100) {
              clearInterval(interval);
              return { ...f, progress: 100, status: 'completed' };
            }
            return { ...f, progress: newProgress };
          }
          return f;
        }));
      }, 300);
    });
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const removeFile = useCallback((fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  }, []);

  const handleClose = useCallback(() => {
    setUploadedFiles([]);
    onOpenChange(false);
  }, [onOpenChange]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">Upload Medical Reports</DialogTitle>
          <DialogDescription className="text-base">
            Upload your medical reports for AI-powered analysis and insights.
            Supported formats: PDF, Images, DOC, DOCX, TXT (Max 10MB each)
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Drop Zone */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`
              relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300
              ${isDragOver 
                ? 'border-primary bg-primary/5 scale-105' 
                : 'border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/20'
              }
            `}
          >
            <div className="space-y-4">
              <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-health-light-blue/10 flex items-center justify-center ${isDragOver ? 'animate-pulse' : ''}`}>
                <Upload className="h-8 w-8 text-primary" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {isDragOver ? 'Drop files here' : 'Drag & drop files here'}
                </h3>
                <p className="text-muted-foreground mb-4">or</p>
                <Button 
                  variant="outline" 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gradient-to-r from-primary/5 to-health-light-blue/5 hover:from-primary/10 hover:to-health-light-blue/10 border-primary/20"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Browse Files
                </Button>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.gif,.txt,.doc,.docx"
              onChange={(e) => handleFileSelect(e.target.files)}
              className="hidden"
            />
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Uploaded Files</h4>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {uploadedFiles.map((uploadFile) => (
                  <div key={uploadFile.id} className="p-4 rounded-lg border bg-card/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-health-light-blue/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm truncate max-w-48">
                            {uploadFile.file.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {formatFileSize(uploadFile.file.size)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {uploadFile.status === 'completed' && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {uploadFile.status === 'error' && (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(uploadFile.id)}
                          className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {uploadFile.status === 'uploading' && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Uploading...</span>
                          <span>{Math.round(uploadFile.progress)}%</span>
                        </div>
                        <Progress value={uploadFile.progress} className="h-2" />
                      </div>
                    )}
                    
                    {uploadFile.status === 'completed' && (
                      <p className="text-xs text-green-600 font-medium">
                        Upload completed successfully
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-health-light-blue text-white hover:shadow-lg"
              disabled={uploadedFiles.length === 0 || uploadedFiles.some(f => f.status === 'uploading')}
              onClick={() => {
                toast({
                  title: "Files processed!",
                  description: `${uploadedFiles.filter(f => f.status === 'completed').length} files have been successfully analyzed.`,
                });
                handleClose();
              }}
            >
              Process Files ({uploadedFiles.filter(f => f.status === 'completed').length})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};