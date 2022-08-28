import { Button, Card, CardActions, CardText, CardTitle } from "react-mdl";

interface GenericProjectComponentInitObj {
    background: string;
    title: string;
    text: string;
    githubLink: string;
    website?: boolean;
    websiteLink?: string;
}

export const GenericProjectComponent = (data: GenericProjectComponentInitObj) => {
    return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle style={{ color:'#fff', height: '176px', background: `url(${process.env.PUBLIC_URL + data.background}) center / cover` }} >{data.title}</CardTitle>
            <CardText>
                {data.text}
            </CardText>
            <CardActions border>
                <Button href={data.githubLink} target="_blank" colored>GitHub</Button>
                {data.website && <Button href={data.websiteLink} target="_blank" colored>Website</Button>}
            </CardActions>
            {/* <CardMenu style={{ color: '#fff' }}>
                <IconButton name='share' />
            </CardMenu> */}
        </Card>
    )
} 