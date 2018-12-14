export class WidgetModel {
  id: number;
  images: string[];
  title: string;
  author: string;
  followers: { number: number, images: string[] };
  inFavorites: boolean;
}
