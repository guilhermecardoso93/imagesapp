import { useEffect, useState } from "react";
import { Area, Container, Header, ScreenWaring, PhotoList, UploadForm } from "./App.styles";
import { PhotoItem } from "./components/PhotoItem";
import * as Photos from "./services/photos";
import { PhotoTypes } from "./types/photoTypes";

export function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<PhotoTypes[]>([]);

  function handleFormSubmit() {}

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
          <input type='file' name='image' placeholder='Escolher arquivo'/>
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
