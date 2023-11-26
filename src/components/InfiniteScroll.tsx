import React, {useState, useEffect, useCallback} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {List, ListItem, ListItemText, CircularProgress} from '@mui/material';

const InfiniteScrollList = () => {
    const [items, setItems] = useState([1, 2, 3]);
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = useCallback(() => {

        if (items.length >= 100) {
            setHasMore(false);
            return;
        }

        // simulate a network request
        setTimeout(() => {
            setItems(prevItems => [...prevItems, prevItems.length]);
        }, 1500);
    },[setItems]);

    return (
        <div style={{height:'100px',backgroundColor:'pink', overflow: 'auto'}} id="scrollableDiv">
            <InfiniteScroll
                style={{ overflow: 'hidden' }}
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<CircularProgress/>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                scrollableTarget="scrollableDiv"
            >
                <List>

                </List>
                <List>
                    {items.map((_, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`Item ${index + 1}`}/>
                        </ListItem>
                    ))}
                </List>
            </InfiniteScroll>
        </div>
    );
};

export default InfiniteScrollList;