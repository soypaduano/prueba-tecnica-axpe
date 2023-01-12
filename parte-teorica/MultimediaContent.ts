
interface MultimediaContent {
    title: string;
    price: number;
    duration: number;
    adult: boolean;
    additionalFee: number;
  }


class MultimediaContentDownload implements MultimediaContent {
    title: string;
    price: number;
    duration: number;
    adult: boolean;
    size: number;
    additionalFee: number;
}

class MultimediaContentStream implements MultimediaContent {
    title: string;
    price: number;
    duration: number;
    adult: boolean;
    additionalFee: number;
}

class MultimediaContentPodcast implements MultimediaContent {
    title: string;
    price: number;
    duration: number;
    adult: boolean;
    size: number;
    author: string;
    additionalFee: number;
}


