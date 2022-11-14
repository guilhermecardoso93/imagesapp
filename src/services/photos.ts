import { ref,listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../libs/firebase";
import { PhotoTypes } from "../types/photoTypes";

export async function getAll() {
  let list: PhotoTypes[] = [];

  const galleryFolder = ref(storage, "gallery")
  const photoList = await listAll(galleryFolder)

  for(let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i])

    list.push({
      name:photoList.items[i].name,
      url: photoUrl,
    })
  }

  return list;
}
