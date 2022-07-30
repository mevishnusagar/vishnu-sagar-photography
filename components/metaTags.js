import React from 'react'

function metaTags(props) {
    return (
        <>
            {/* -- Primary Meta Tags -- */}
            <title>{props.meta_title}</title>
            <meta name="title" content={props.meta_title} />
            <meta name="description" content="Fashion, commercial, portrait and landscape photographer based out of London, Ontario" />

            {/* -- Open Graph / Facebook -- */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={props.pageUrl} />
            <meta
                property="og:title"
                content={props.meta_title}
            />
            <meta property="og:description" content="Fashion, commercial, portrait and landscape photographer based out of London, Ontario" />
            <meta property="og:image" content={props.meta_ogImage.length > 0 ? props.meta_ogImage : "/assets/images/sgr.JPG"} />

            {/* -- Twitter - */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={props.pageUrl} />
            <meta property="twitter:title" content={props.meta_title} />
            <meta property="twitter:description" content="Fashion, commercial, portrait and landscape photographer based out of London, Ontario" />
            <meta property="twitter:image" content={props.meta_ogImage.length > 0 ? props.meta_ogImage : "/assets/images/sgr.JPG"} />
            <meta
                name="keywords"
                content={props.meta_keywords}
            />
            <meta property="og:site_name" content="Vishnu Sagar Photography" />
            <meta name="author" content="Vishnu Sagar" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </>
    )
}

export default metaTags
