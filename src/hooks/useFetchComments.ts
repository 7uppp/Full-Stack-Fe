// hooks/useFetchComments.ts
import { useState, useCallback } from 'react';
import makeRequest from '../service/makeRequest';

const useFetchComments = (postId: string) => {
    const [allComments, setAllComments] = useState([]);
    const [isFetchComment, setIsFetchComment] = useState(false);

    const fetchAllComments = useCallback(async () => {
        const result = await makeRequest('GET', `/posts/${postId}/comments`, { postId });
        try {
            if (result.status === 200) {
                setAllComments(result?.data?.data);
                setIsFetchComment(true);
            }
        } catch {
            setIsFetchComment(false);
            console.log('fetch comments failed');
        }
    }, [postId]);

    return {
        allComments,
        isFetchComment,
        fetchAllComments
    };
};

export default useFetchComments;
