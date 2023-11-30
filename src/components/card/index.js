import React from 'react';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { nameTitleStyle, subtitleStyle, iconWrapStyle, cardContainerStyle, textDescriptionStyle, picStyle, buttonStyle, subtitleHeadingStyle, Wrapper } from "../helper"

function Card(props) {
    const { name = "Repo", score = "0", language = "default", star = "0", watchers = "0", avatar_url, owner, picture = "https://picsum.photos/id/237/200/300", description, id, updated_at = "21-02-2023", create_at = "12-09-2021" } = props;

    const buttons = () => {
        return (<>
            <div style={iconWrapStyle}>
                <StarHalfIcon />:<span>{star}</span>
            </div>
            <div style={iconWrapStyle}>
                <SportsScoreIcon />:<span>{score}</span>
            </div>
            <div style={iconWrapStyle}>
                <VisibilityIcon style={buttonStyle({ marginLeft: "10px" })} />:<span>{watchers}</span>
            </div>
        </>)
    }

    let update = new Date(updated_at).toLocaleDateString();
    let create = new Date(create_at).toLocaleDateString();


    return (
        <div className='col-md-4' style={cardContainerStyle} key={id}>
            <div className='container' >
                <div className='row justify-content-center align-items-center'>
                    <div className='col-6'>
                        <Wrapper>
                            <img src={owner?.avatar_url || avatar_url || picture} style={picStyle} alt="gituser_repo" />
                        </Wrapper>
                        <span style={nameTitleStyle}>{name}</span>
                    </div>
                </div>
            </div>
            <div className='container' >
                <div className='row d-flex justify-content-center align-items-start'>
                    <div className='col-4' >
                        <div style={subtitleHeadingStyle}>Language</div>
                        <div style={subtitleStyle}>{language}</div>
                    </div>
                    <div className='col-4' >
                        <div style={subtitleHeadingStyle}>CreatedAt</div>
                        <div style={subtitleStyle}>{create}</div>
                    </div>
                    <div className='col-4' >
                        <div style={subtitleHeadingStyle}>Updated At</div>
                        <div style={subtitleStyle}>{update}</div>
                    </div>
                </div>
            </div>
            <div className='container' >
                <div className='row'>
                    <div className="card-body">
                        <h5 className="card-title" style={{ ...subtitleHeadingStyle, textAlign: "start" }}>Description</h5>
                        <p className="card-text" style={textDescriptionStyle}>{description}</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-end'>
                    <div className='col-3' style={{ display: "flex", justifyContent: "end", padding: 0, margin: 0 }}>
                        {buttons()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card