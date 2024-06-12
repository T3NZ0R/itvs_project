import {useCallback,  useMemo} from "react";
import {supabase} from "./config";
import {useDispatch} from "react-redux";
import {getNews, getSimpleNews} from "@/store/news.slice";

export const useNews = (id) => {
    const dispatch = useDispatch();

    const getNewsRequest = useCallback(async () => {
        const { data: news, error } = await supabase
            .from('news')
            .select('*, section(id, value)')
            .order('created_at', { ascending: false })
        dispatch(getNews({ news, error }))
    }, [dispatch]);

    const getSimpleNewsRequest = useCallback(async () => {
        const { data: news, error } = await supabase
            .from('news')
            .select('*, section(id, value)')
            .eq('id', id)
            .single();
        dispatch(getSimpleNews({ news, error }))
    }, [dispatch, id]);


    return useMemo(() => [getNewsRequest, getSimpleNewsRequest], [getNewsRequest, getSimpleNewsRequest]);
};
