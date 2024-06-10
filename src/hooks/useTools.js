import {useCallback, useMemo} from "react";
import {supabase} from "./config";
import {useDispatch} from "react-redux";
import {getTools} from "@/store/tools.slice";

export const useTools = () => {
    const dispatch = useDispatch()
    const getToolsRequest = useCallback(async () => {
        const { data: tools, error } = await supabase
            .from('programs')
            .select('*')
        dispatch(getTools({tools, error}));
    }, [dispatch]);

    return useMemo(() => [getToolsRequest], [getToolsRequest]);
};
