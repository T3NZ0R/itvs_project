import {useCallback, useMemo} from "react";
import {supabase} from "./config";
import {useDispatch} from "react-redux";
import {getStaff} from "@/store/staff.slice";


export const useMentors = () => {
    const dispatch = useDispatch()
    const getMentors = useCallback(async () => {

        const {data: mentors, error} = await supabase
            .from('mentors')
            .select("email, id, name, photo, wikilink, degree(id, value)")
            .order("degree_id", {ascending: true});
        dispatch(getStaff({mentors, error}));

    }, [dispatch]);

    return useMemo(() => [getMentors], [getMentors]);
};
