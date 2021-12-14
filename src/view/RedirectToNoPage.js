import React, { useHistory, useEffect } from 'react';

export default function RedirectToNoPage() {

    function RedirectHook() {
        var history = useHistory();
        useEffect(() => {
            history.goBack();
        })
        return null;
    }

    return (
        <div>
            <RedirectToNoPage />
        </div>
    )
}

