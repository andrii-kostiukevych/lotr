import {BookTypeData} from '../books/types/book-type-data';
import {DefaultDto} from './default-dto';

export interface BooksDto extends DefaultDto{
  docs: BookTypeData[]
}
