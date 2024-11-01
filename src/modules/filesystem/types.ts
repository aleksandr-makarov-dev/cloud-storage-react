export interface FileSystemObject {
  key: string;
  eTag: string;
  isDir: boolean;
  size: number;
  lastModifiedDateTime: string;
}
