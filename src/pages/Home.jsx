import React, {useEffect, useState} from 'react';
import GamesList from "../components/games/GamesList";
import axios from 'axios';
import DisplayOptions from "../components/displayoptions/DisplayOptions";

const Home = () => {

    const [games, setGames] = useState([]);
    const [orderBy,setOrderBy] = useState('-revelance');
    const [currentPage,setCurrentPage] = useState(1)
    const [fetching, setFetching]=useState(true);
    const [totalCount, setTotalCount]=useState(0);

    async function getGames() {
        try {
            const options = {
                method: 'GET',
                url: `https://api.rawg.io/api/games`,
                //params: {key: process.env.REACT_APP_RAWG_API_KEY, dates:'2019-09-01,2019-09-30', platforms:'18,1,7'}
                params:{
                    key:process.env.REACT_APP_RAWG_API_KEY,ordering:orderBy,page:currentPage,page_size:20
                }

            };
            const response = await axios.request(options);
            return response;
            //const response = await axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`);


        } catch (error) {
            console.error(error);
        }
    }

    const handleScroll = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight;
        const currentHeight = Math.ceil(
            e.target.documentElement.scrollTop + window.innerHeight
        );

        if ( scrollHeight-currentHeight<100 && games.length <totalCount ) {
            setFetching(true);
        }

    };

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return ()=>{
            document.removeEventListener('scroll', handleScroll);
        }
    }, [totalCount, games.length])

    useEffect(() => {
        console.log(fetching, 'fetching in order by useEffect')
        if(!fetching){
            getGames().then((response)=>{

                setGames(response.data.results);
                setCurrentPage(prevState=>prevState+1);
                setTotalCount(response.data.count);
            });
        }

    }, [orderBy]);

    useEffect(() => {
        console.log('use effect fetching')
        if(fetching){
            getGames().then(response=>{
                console.log(response, 'response')
                setGames(prev=>[...prev,...response.data.results]);
                setCurrentPage(prevState=>prevState+1);
                setTotalCount(response.data.count);
            })
                .finally(()=>{
                    setFetching(false);
                })
        }

    }, [fetching]);

    const onOrderByChange=(val)=>{
        setCurrentPage(1);
        setOrderBy(val);
    }
    return (
        <div>
            <DisplayOptions updateOrderBy={onOrderByChange}/>
            <GamesList games={games}/>
        </div>
    );
};

export default Home;
