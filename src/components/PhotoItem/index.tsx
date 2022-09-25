import { Photo } from '../../types/Photo';
import * as Photos from '../../services/Photos';
import * as C from './styles';

type Props = {
    photoItem: Photo
    onDelete: (id: string) => void;
}

export const PhotoItem = ({ onDelete, photoItem: { name, url} }: Props) => {

    const handleDeleteFile = async() => {
       onDelete(name);
    }

    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <C.DeleteButtonFile onClick={handleDeleteFile}>❌</C.DeleteButtonFile>
        </C.Container>
    )
}