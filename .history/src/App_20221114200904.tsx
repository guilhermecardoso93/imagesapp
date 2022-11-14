import { FormEvent, useEffect, useState } from "react";
import { Area, Container, Header, ScreenWaring, PhotoList, UploadForm } from "./App.styles";
import { PhotoItem } from "./components/PhotoItem";
import * as Photos from "./services/photos";
import { PhotoTypes } from "./types/photoTypes";

export function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<PhotoTypes[]>([]);
  const [ uploading, setUploading ]  = useState(false);

  async function  handleFormSubmit(e :FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;
    if(file && file.size > 0 ) {
      setUploading(true)
      let result = await Photos.insert(file)
      setUploading(false)

      if(result instanceof Error ) {
        alert(`${result.name} ${result.message}`)
      } else {
        let newPhotoList = [...photos]
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }

  }

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  return (
    <Container>
      <Area>
        <Header>Galeria de Fotos</Header>
        <UploadForm method="post" onSubmit={handleFormSubmit}>
          <input type='file' name='image'/>
          {uploading && "Enviando..."}
          <input type='submit' value='Enviar'/>
         
        </UploadForm>

        {loading && (
          <ScreenWaring>
            <div className="emoji">🤚</div>
            <div>Carregando...</div>
          </ScreenWaring>
        )}
        {!loading && photos.length > 0 && (
          <PhotoList>
            {photos.map((photo) => (
              <PhotoItem key={photo.url} name={photo.name} url={photo.url} />
            ))}
          </PhotoList>
        )}
        {!loading && photos.length === 0 && (
          <ScreenWaring>
            <div className="emoji">🙃</div>
            <div>Não há fotos disponiveis...</div>
          </ScreenWaring>
        )}
      </Area>
    </Container>
  );
}
