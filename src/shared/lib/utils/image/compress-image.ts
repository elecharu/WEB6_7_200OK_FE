import imageCompression from "browser-image-compression";

export async function compressImage(file: File): Promise<File> {
  const MAX_SIZE_MB = 2;
  const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
  
  // 이미지 파일 형식 체크
  const isImage = file.type.startsWith("image/");
  
  // 이미지 파일이 아닌 경우 그대로 반환 처리
  if (!isImage) {
    return file;
  }
  
  if (file.size <= MAX_SIZE_BYTES) {
    return file;
  }
  
  const options = {
    maxSizeMB: MAX_SIZE_MB, // 최대 2MB
    maxWidthOrHeight: 1920, // 최대 너비/높이
    useWebWorker: true, // Web Worker 사용으로 성능 향상
    fileType: "image/webp", // WebP 형식
  };
  
  try {
    const compressedFile = await imageCompression(file, options);
    
    // 파일 변환
    const originalName = file.name;
    const nameWithoutExt = originalName.replace(/\.[^/.]+$/, "");
    const newFile = new File([compressedFile], `${nameWithoutExt}.webp`, {
      type: "image/webp",
    });
    
    return newFile;
  } catch {
    return file;
  }
}

export async function compressImages(files: File[]): Promise<File[]> {
  return Promise.all(files.map((file) => compressImage(file)));
}
