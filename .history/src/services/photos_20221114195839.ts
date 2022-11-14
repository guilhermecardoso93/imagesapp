import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../libs/firebase";
import { PhotoTypes } from "../types/photoTypes";
import { v4 as createId } from "uuid";

export async function getAll() {
  let list: PhotoTypes[] = [];

  const galleryFolder = ref(storage, "gallery");
  const photoList = await listAll(galleryFolder);

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }

  return list;
}

export async function insert(file: File) {
  const typesOfImages = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/svg",
  ];

  if (typesOfImages.includes(file.type)) {
    let randomName = createId();
    let newFile = ref(storage, `gallery/${randomName}`);

    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: photoUrl,
    };
  } else {
    return new Error("Tipo de Arquivo não permitido!");
  }
}
