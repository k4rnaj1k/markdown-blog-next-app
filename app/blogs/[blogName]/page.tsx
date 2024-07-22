'use server'
import { BlogContent } from "@/app/components/BlogContent";
import { getBlogContent } from "@/app/utils/getBlogContent";
import { Box, Card, CardContent, Container, Grid, Paper, Typography } from "@mui/material";

//TODO: replace placeholder with actual page
export default async function BlogPage({ params }: { params: { blogName: string } }) {
    const { blogName } = params;
    console.log(blogName);
    const { blogContent, blogTitle } = await getBlogContent(blogName);
    //blogname
    //- search for file
    //- file not found - no luck
    // file found - render body
    return <Container maxWidth="md">
        <Paper elevation={16}>
            <Grid container spacing={3}>
                <Grid item>
                    <Typography sx={{ pl: 2 }} variant="h3">{blogTitle}</Typography>
                </Grid>
                <Grid item>
                    <BlogContent>{blogContent}</BlogContent>
                </Grid>
            </Grid>
        </Paper>
    </Container>
}