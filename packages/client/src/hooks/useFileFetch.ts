import axios from "axios";
import { useEffect, useState } from "react";
import { IResponse } from "../types/apiResponse.type";
import IFileData from "../types/file.type";

const useFileFetch = (): {
  files: IFileData[];
  loading: boolean;
  error: any;
} => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [files, setFiles] = useState<IFileData[]>([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const url = "http://localhost:4000/file";

    axios({
      method: "GET",
      url,
    })
      .then(({ data: { data } }: IResponse) => {
        setFiles(data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return { files, loading, error };
};

export default useFileFetch;
