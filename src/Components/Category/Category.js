import React from 'react';
import {CategoryTitle,CategoryList,CategoryListItem,CategoryLink} from './styles'

export default function Category({ name, options }) {
    return (
        <section>
            <CategoryTitle>{name}</CategoryTitle>
            <CategoryList>
                {
                    options.map((gif,index) => {
                        return (
                            <CategoryListItem key = {gif} index = {index} >
                                <CategoryLink to={`/search/${gif}`} >
                                    {gif} Gifs
                                </CategoryLink>
                            </CategoryListItem>
                        )
                    })
                }
            </CategoryList>
        </section>
    )
}