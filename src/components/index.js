import { Octokit } from "https://esm.sh/@octokit/core";
import React, { useEffect, useState } from 'react';
import Navbar from "./navbar/index";
import Card from "./card/index";

function Home() {
    const [keyword, setKeyword] = useState('code');
    const [searchKey, setSearchInput] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log("feteched data", data);

    function FetchData(keyword, data) {
        switch (keyword) {
            case "users":
                return data;
            case "repositories":
                return data.items;
            case 'code':
                return data.items;
            case 'commits':
                return data.items;
            default:
                return data;

        }

    }

    useEffect(() => {
        const queryString = 'q=' + encodeURIComponent(searchKey);
        const octokit = new Octokit({
            auth: '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'
        })
        const fetchData = async () => {
            setLoading(true);
            let data = await octokit.request(`GET /search/${keyword}?${queryString}&page=2`, {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                },
            })
            if (data && data.status === 200) {
                let items = FetchData(keyword, data?.data || []);
                setData(items);
                setLoading(false);
            } else {
                setLoading(false);
            }
        }
        if (keyword && searchKey) {
            fetchData()
        }

    }, [keyword, searchKey])

    return (
        <>
            <Navbar setKeyword={setKeyword} setData={setData} setSearchInput={setSearchInput} />
            {!data.length && <div style={{ fontFamily: "sans-serif", fontSize: "13px" }}>Please select search type from drop down and then enter search keyword</div>}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                {!!(data && data?.length) && data?.map((item, index) => {
                    let itemData = null
                    if (keyword === 'code') {
                        itemData = item.repository
                    } else if (keyword === "commits") {
                        itemData = { ...item.repository, score: item.score }
                    } else if (keyword === "repositories") {
                        itemData = item
                    } else itemData = item
                    return <Card
                        key={item?.id}
                        picture={"https://picsum.photos/id/237/200/300"}
                        description={"Hello I'm Ram From India"}
                        {...itemData}
                    />
                })}
            </div>
            {loading && <h6 style={{ marginTop: "15%" }}>Loading...</h6>}
        </>
    )
}

export default Home;