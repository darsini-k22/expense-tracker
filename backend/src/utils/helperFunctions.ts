import { Types } from 'mongoose';

export function convertToObjectId(query: any) {
  if (query._id) {
    query._id = new Types.ObjectId(query._id);
  }
  if (query.userId) {
    query.userId = new Types.ObjectId(query.userId);
  }
  return query;
}

export function convertDate(query: any) {
  if (query.date) {
    const splitDate = query.date.split('/');
    const date = splitDate[0];
    const month = splitDate[1];
    const year = splitDate[2];
    query.date = new Date(year, month, date);
  }
  return query;
}
