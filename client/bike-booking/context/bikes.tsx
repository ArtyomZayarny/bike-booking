"use client";
import { createContext, useCallback, useEffect, useState } from "react";
import { useBikes } from "../hooks/useBikes";
import { IBike } from "@/types";
// import { sortByDate } from "../utils/sortByDate";

type BikesContextType = {
  bikes: IBike[] | [];
  //initialArticles: IArticle[] | [];
  loading: boolean;
  deleteArticle: (id: string) => void;
  addArticle: (article: IBike) => void;
  updateArticle: (id: string, data: IBike) => void;
  //   searchArticle: (s: string) => void;
  //   searchString: string;
  //   setSearchString: (s: string) => void;
  storedBikes: IBike[] | [];
  //   setStoredArticles: (arg: IArticle[]) => void;
  //   sortArticleByDate: () => void;
};

export const BikesContext = createContext({} as unknown as BikesContextType);

type Props = {
  children: React.ReactNode;
};

export const BikesContextProvider = ({ children }: Props) => {
  //Manage bikes from DB
  const { bikes, loading, setBikes } = useBikes();
  //const [dateSort, setDateSort] = useState("newest");
  const [storedBikes, setStoredBikes] = useState<IBike[] | null>(null);
  //const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (bikes && bikes.length > 0) {
      //setStoredBikes(sortByDate(articles));
      console.log("bikes", bikes);
      setStoredBikes(bikes);
    }

    if (bikes && bikes.length === 0) {
      setStoredBikes([]);
    }
  }, [bikes]);

  const deleteBike = useCallback(
    (id: string) => {
      const updatedBikes = storedBikes?.filter((bike: IBike) => bike.id !== id);
      setStoredBikes(updatedBikes!);
    },
    [bikes, storedBikes]
  );

  const addBike = useCallback(
    (bike: IBike) => {
      const updatedBike = [...storedBikes!, bike];
      setStoredBikes(updatedBike);
    },
    [bikes, storedBikes]
  );

  const updateBike = useCallback(
    (id: string, data: IBike) => {
      const updatedBikes = storedBikes?.map((bike) => {
        if (bike.id === id) {
          bike.status = data.status;
          return bike;
        }
        return bike;
      });
      setStoredBikes(updatedBikes!);
    },
    [bikes, storedBikes]
  );

  // const searchArticle = useCallback(
  //   (searchString: string) => {
  //     const searchArticles = [
  //       ...articles.filter((article) =>
  //         article.title!.toLowerCase().includes(searchString.toLowerCase())
  //       ),
  //     ];
  //     const foundedArticles =
  //       searchArticles.length > 0 ? searchArticles : articles;
  //     setStoredArticles(foundedArticles);
  //   },
  //   [articles]
  // );

  //   const sortArticleByDate = useCallback(() => {
  //     toggleSortByDate();
  //   }, [dateSort, storedArticles]);

  //   const toggleSortByDate = useCallback(() => {
  //     return dateSort === "newest"
  //       ? (setDateSort("oldest"),
  //         setStoredArticles(sortByDate(articles, "oldest")))
  //       : (setDateSort("newest"),
  //         setStoredArticles(sortByDate(articles, "newest")));
  //   }, [dateSort, storedArticles]);

  const value = {
    bikes,
    loading,
    deleteBike,
    addBike,
    updateBike,
    storedBikes,
    setStoredBikes,
  } as unknown as BikesContextType;

  return (
    <BikesContext.Provider value={value}>{children}</BikesContext.Provider>
  );
};
