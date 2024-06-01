import { PhotoGallery_Information } from '@my-library/mongo';
import { IQueryResult } from '@nestjs/cqrs';

export class FindPhotoByNameResult implements IQueryResult {
  readonly Information: PhotoGallery_Information;
  readonly LockedAt: Date | null;
  readonly UpdatedAt: Date;
  readonly UploadedAt: Date;
  readonly DeletedAt: Date | null;
  readonly FavoritedAt: Date | null;
  readonly Tags: string[];
  readonly PersonIds: string[];
  readonly LastViewed: Date | null;
}
