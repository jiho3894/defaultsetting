import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { instance } from "../axios";
import { Topic, TopicList } from "./types";

export const useGetTopic = () => {
  return useQuery<TopicList, AxiosError, Topic[]>(
    ["getTopicList"],
    () => {
      return instance.get("/topic");
    },
    {
      select: (data) => data.data,
    }
  );
};
