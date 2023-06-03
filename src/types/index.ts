export type GetTitansResponse = {
  info: {
    count: number;
    pages: number;
    next_page: null | string;
    prev_page: null | string;
  };
  results: {
    id: number;
    name: string;
    img: string;
    height: string;
    abilities: string[];
    current_inheritor: string;
    former_inheritors: string[];
    allegiance: "Marley" | "Eldia" | "None";
  }[];
};
