import {MovieTypeData} from '../books/types/movie-type-data';
import {DefaultDto} from './default-dto';

export interface MoviesDto extends DefaultDto {
  docs: MovieTypeData[];
}
