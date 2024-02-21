import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MSchema, Types } from 'mongoose';
import { DocumentType } from '../../interfaces/document.interface';

export type DocDocument = HydratedDocument<Document>;

export class DocTableItem {
  @Prop()
  isWorker: boolean;

  @Prop()
  isPartner: boolean;

  @Prop()
  referenceId: Types.ObjectId;

  @Prop()
  referenceName?: string;

  @Prop()
  count: number;

  @Prop()
  price: number;

  @Prop()
  total: number;

  @Prop()
  comment?: number;

  @Prop()
  receiverId: string;

  @Prop()
  recieverPayment: number;

}

@Schema()
export class Document {
  @Prop({ required: true })
  date: number;

  @Prop()
  docNumber: number;

  @Prop({ enum: DocumentType })
  documentType: DocumentType;

  @Prop()
  senderId: Types.ObjectId;

  @Prop()
  receiverId: Types.ObjectId;

  @Prop()
  payValue?: number;

  @Prop()
  deleted?: boolean;

  @Prop()
  comment?: string;
}

export const DocumentSchema = SchemaFactory.createForClass(Document);