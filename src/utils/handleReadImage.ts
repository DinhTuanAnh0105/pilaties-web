export const handleReadImage = (
  event: React.ChangeEvent<HTMLInputElement>,
  setSelectedImage: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>
) => {
  const file = event.target.files?.[0];
  const reader = new FileReader();

  reader.onload = () => {
    setSelectedImage(reader.result);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};
