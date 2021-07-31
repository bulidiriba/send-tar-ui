import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import DescriptionIcon from '@material-ui/icons/Description';
import FormHelperText from '@material-ui/core/FormHelperText';
import CompareIcon from '@material-ui/icons/Compare';


function FileUpload(props) {

    const [selectedFile, setSelectedFile] = useState({file1: null, file2: null});
    const [errorSelectedFile, setErrorSelectedFile] = useState({file1: [false, ""], file2: [false, ""]});
    const [disableExecute, setDisableExecute] = useState({file1: true, file2: true});

    const onFileChange = (fileIndex) => e => {
        console.log("file is uploading: ", fileIndex);
        const file = e.target.files[0];
        setSelectedFile(prevState => ({
            ...prevState,
            [fileIndex]: file
        }));
        const allowedFileType = /(\.csv|)$/i;
        console.log("allowed file type");
        if (!allowedFileType.exec(file)) {
            console.log("file type not passed");
            setErrorSelectedFile(prevState => ({
                ...prevState,
                [fileIndex]: [true, "File type not passed"]
            }));
        } else {
            console.log("File type passed");
        }
    }
    const onFileUpload = () => {

    }

  return(
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <Card className={props.classes.fileUpload}>
                    <CardContent>
                        <Typography variant="h6" align="center" className={props.classes.fileUploadHeader}>
                            File 1
                        </Typography>
                        <Divider light={true} />   
                        <Box align="center" pt={10}>
                            <Box>
                                <label htmlFor="upload-file1" >
                                <input 
                                    id="upload-file1" 
                                    type="file" 
                                    onChange={onFileChange("file1")} 
                                    style={{marginBottom:"20px", display: 'none'}}
                                />
                                <Button 
                                    color="secondary" 
                                    variant={"contained"} 
                                    component={"span"}
                                >Choose File
                                </Button>
                                </label>
                            </Box>
                            {selectedFile["file1"] && (
                                <Box>
                                    <Box pt={1} color="#b9bdc1">
                                    <Typography variant="body1">File Name: </Typography><Typography variant="caption">{selectedFile["file1"]?.name}</Typography>                        
                                    </Box>
                                    <Box pt={1} color="#b9bdc1">
                                        <Typography variant="body1">File Type: </Typography><Typography variant="caption">{selectedFile["file1"]?.type}</Typography>
                                    </Box>
                                </Box>
                            )} 
                            {errorSelectedFile["file1"][0] && (
                                <Box pt={1}>
                                    <FormHelperText error={true}>{errorSelectedFile["file1"][1]}</FormHelperText>
                                </Box>
                            )}
                        </Box>

                        <Box pt={10}></Box>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card className={props.classes.fileUpload}>
                    <CardContent>
                        <Typography variant="h6" align="center" className={props.classes.fileUploadHeader}>
                            File 2
                        </Typography>
                        <Divider />
                        <Box align="center" pt={10}>
                            <Box>
                                <label htmlFor="upload-file2" >
                                <input 
                                    id="upload-file2" 
                                    type="file" 
                                    onChange={onFileChange("file2")} 
                                    style={{marginBottom:"20px", display: 'none'}}
                                />
                                <Button 
                                    color="secondary" 
                                    variant={"contained"} 
                                    component={"span"}
                                >Choose File
                                </Button>
                                </label>
                            </Box>
                            {selectedFile["file2"] && (
                                <Box>
                                    <Box pt={1} color="#b9bdc1">
                                    <Typography variant="body1">File Name: </Typography><Typography variant="caption">{selectedFile["file2"]?.name}</Typography>                        
                                    </Box>
                                    <Box pt={1} color="#b9bdc1">
                                        <Typography variant="body1">File Type: </Typography><Typography variant="caption">{selectedFile["file2"]?.type}</Typography>
                                    </Box>
                                </Box>
                            )} 
                            {errorSelectedFile["file2"][0] && (
                                <Box pt={1}>
                                    <FormHelperText error={true}>{errorSelectedFile["file2"][1]}</FormHelperText>
                                </Box>
                            )}
                        </Box>
                        <Box pt={10}></Box>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
        
        <Box align="center" pt={4}>
            <Button
                variant="contained"
                color="secondary"
                style={{width:150, fontSize:15}}
                endIcon={<CompareIcon />}
            >Execute
            </Button>
        </Box>
    </Box>
    )
}

export default FileUpload;
