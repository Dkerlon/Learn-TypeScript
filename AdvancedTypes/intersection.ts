type FileData = {
    path: string,
    content: string
};

type StatusData = {
    isOpen: boolean,
    errorMessage?: string
};

type AcessedFileData = FileData & StatusData;