import IFileData from "./file.type";

export interface IResponseData {
  data: IFileData[];
  status: string;
  statusCode: number;
}

export interface IResponse {
  data: IResponseData;
}
