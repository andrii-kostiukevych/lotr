import {BookTypeData} from './book-type-data';
import {ChapterTypeData} from './chapter-type-data';

export interface FullBookTypeData extends BookTypeData {
  chapters?: ChapterTypeData[];
}
