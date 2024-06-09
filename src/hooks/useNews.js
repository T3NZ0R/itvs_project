import {useCallback, useMemo} from "react";
import {supabase} from "./config";
import {useDispatch} from "react-redux";
import {getNews} from "@/store/news.slice";

export const useNews = () => {
    const dispatch = useDispatch()

    const getNewsRequest = useCallback(async () => {
        const { data: news, error } = await supabase
            .from('news')
            .select('*, section(id, value)')
            .order("degree_id", {ascending: true});
        dispatch(getNews({ news, error }))
    }, []);

    return useMemo(() => [getNewsRequest], [getNewsRequest]);
};
