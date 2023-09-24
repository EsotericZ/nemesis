import { Fragment, useEffect, useState } from "react";
// import createEvent from "../../services/events/createEvent";
import getAllDivisions from "../../services/divisions/getAllDivisions";
import getAllFormats from "../../services/formats/getAllFormats";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import './createEvent.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#CBCCD2',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#CBCCD2',
    },
    '& .MuiInputLabel-root': {
        color: '#CBCCD2',
    },
    '& .MuiOutlinedInput-input': {
        color: '#CBCCD2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#CBCCD2',
        },
        '&:hover fieldset': {
            borderColor: '#CBCCD2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#CBCCD2',
        },
    },
});

const StyledTimePicker = styled(TimePicker)({
    '& label.Mui-focused': {
        color: '#CBCCD2',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#CBCCD2',
    },
    '& .MuiInputLabel-root': {
        color: '#CBCCD2',
    },
    '& .MuiOutlinedInput-input': {
        color: '#CBCCD2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#CBCCD2',
        },
        '&:hover fieldset': {
            borderColor: '#CBCCD2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#CBCCD2',
        },
    },
});

const StyledDatePicker = styled(DatePicker)({
    '& label.Mui-focused': {
        color: '#CBCCD2',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#CBCCD2',
    },
    '& .MuiInputLabel-root': {
        color: '#CBCCD2',
    },
    '& .MuiOutlinedInput-input': {
        color: '#CBCCD2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#CBCCD2',
        },
        '&:hover fieldset': {
            borderColor: '#CBCCD2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#CBCCD2',
        },
    },
});

const StyledDateTimePicker = styled(DateTimePicker)({
    '& label.Mui-focused': {
        color: '#CBCCD2',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#CBCCD2',
    },
    '& .MuiInputLabel-root': {
        color: '#CBCCD2',
    },
    '& .MuiOutlinedInput-input': {
        color: '#CBCCD2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#CBCCD2',
        },
        '&:hover fieldset': {
            borderColor: '#CBCCD2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#CBCCD2',
        },
    },
});

export const CreateEvent = () => {
    const axiosPrivate = useAxiosPrivate();
    const today = dayjs();
    const tomorrow = dayjs().add(1, 'day').set('hour', 22).startOf('hour');
    const fiveAM = dayjs().set('hour', 5).startOf('hour');
    const eightAM = dayjs().set('hour', 8).startOf('hour');
    const sixPM = dayjs().set('hour', 18).startOf('hour');
    const tenPM = dayjs().set('hour', 22).startOf('hour');

    const steps = ['Event Details', 'Divisions', 'Financials', 'Completion'];





// remove these

    const products = [
        {
            name: 'Product 1',
            desc: 'A nice thing',
            price: '$9.99',
        },
        {
            name: 'Product 2',
            desc: 'Another thing',
            price: '$3.45',
        },
        {
            name: 'Product 3',
            desc: 'Something else',
            price: '$6.51',
        },
        {
            name: 'Product 4',
            desc: 'Best thing of all',
            price: '$14.11',
        },
        { 
            name: 'Shipping', 
            desc: '', 
            price: 'Free'
        },
    ];
    
    const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
    const payments = [
        { name: 'Card type', detail: 'Visa' },
        { name: 'Card holder', detail: 'Mr John Smith' },
        { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
        { name: 'Expiry date', detail: '04/2024' },
    ];
    
    // remove these
    
    






    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepOptional = (step) => {
        return null
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleFinish = () => {
        handleNext();
    }

    const [eventDate, setEventDate] = useState(dayjs(`${tomorrow}`).format('MM-DD-YYYY'));
    const [startTime, setStartTime] = useState('8:00 AM');
    const [endTime, setEndTime] = useState('18:00 PM');
    const [deadline, setDeadline] = useState(dayjs(`${tomorrow}`).format('MM-DD-YYYY') + ' 22:00');
    const [newEvent, setNewEvent] = useState({
        eventName: '', 
        eventClub: '',
        description: '',
        imageURL: '',
    });
    const [formats, setFormats] = useState([]);
    const [divisions, setDivisions] = useState([]);
    
    const handleEventDetails = (e) => {
        const { name, value } = e.target;
        setNewEvent((prev) => {
            return { ...prev, [name]: value }
        });
    }

    useEffect(() => {
        const getFormats = async () => {
            try {
                const response = await getAllFormats(axiosPrivate);
                setFormats(response);
            } catch (err) {
                console.log(err)
            }
        }
        getFormats();

        const getDivisions = async () => {
            try {
                const response = await getAllDivisions(axiosPrivate);
                setDivisions(response);
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        }
        getDivisions();

    }, [])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ width: '80%', ml:'auto', mr:'auto' }} className='eventsPage'>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - Event Created
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Typography sx={{ mt: 2, ml:'50px', mb: 1, mr:'50px' }}>Step {activeStep + 1}</Typography>

                        {activeStep === 0 && (
                            <Fragment>
                                <Typography variant="h6" gutterBottom>
                                    Event Details
                                </Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} sx={{ color: 'white' }}>
                                        <StyledTextField
                                            required
                                            id="eventName"
                                            name="eventName"
                                            label="Event Name"
                                            fullWidth
                                            variant="standard"
                                            sx={{ input: {color: 'white'} }}
                                            onChange={handleEventDetails}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} className='multiLine'>
                                        <StyledTextField
                                            required
                                            id="eventClub"
                                            name="eventClub"
                                            label="Hosting Club"
                                            fullWidth
                                            variant="standard"
                                            sx={{ input: {color: 'white'} }}
                                            onChange={handleEventDetails}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} sx={{ color: 'white' }}>
                                        <StyledTextField
                                            required
                                            id="description"
                                            name="description"
                                            label="Description"
                                            fullWidth
                                            multiline
                                            rows={4}
                                            variant="standard"
                                            sx={{ input: {color: 'white'} }}
                                            onChange={handleEventDetails}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{ color: 'white' }}>
                                        <StyledDatePicker
                                            id='eventDate'
                                            name='eventDate'
                                            label='Event Date'
                                            defaultValue={tomorrow}
                                            disablePast
                                            views={['year', 'month', 'day']}
                                            sx={{ 
                                                svg: {color: 'white'},
                                                input: {color: 'white'} 
                                            }}
                                            onChange={(newDate) => {
                                                setEventDate(dayjs(newDate).format('MM-DD-YYYY'))
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{ color: 'white' }}>
                                        <StyledTimePicker 
                                            id='startTime'
                                            name='startTime'
                                            label='Start Time'
                                            defaultValue={eightAM} 
                                            minTime={fiveAM} 
                                            sx={{ 
                                                svg: {color: 'white'},
                                                input: {color: 'white'} 
                                            }}
                                            onChange={(newTime) => {
                                                setStartTime(dayjs(newTime).format('H:mm A'));
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{ color: 'white' }}>
                                        <StyledTimePicker 
                                            id='endTime'
                                            name='endTime'
                                            label='End Time'
                                            defaultValue={sixPM} 
                                            maxTime={tenPM} 
                                            sx={{ 
                                                svg: {color: 'white'},
                                                input: {color: 'white'} 
                                            }}
                                            onChange={(newTime) => {
                                                setEndTime(dayjs(newTime).format('H:mm A'));
                                            }}
                                            />
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{ color: 'white' }}>
                                        <StyledDateTimePicker
                                            id='deadline'
                                            name='deadline'
                                            label='Deadline'
                                            defaultValue={tomorrow}
                                            disablePast
                                            views={['year', 'month', 'day', 'hours', 'minutes']}
                                            sx={{ 
                                                svg: {color: 'white'},
                                                input: {color: 'white'} 
                                            }}
                                            onChange={(newDateTime) => {
                                                setDeadline(dayjs(newDateTime).format('MM-DD-YYYY HH:mm'));
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <StyledTextField
                                            id="imageURL"
                                            name="imageURL"
                                            label="Image URL"
                                            fullWidth
                                            variant="standard"
                                            sx={{ input: {color: 'white'} }}
                                            onChange={handleEventDetails}
                                        />
                                    </Grid>
                                </Grid>
                            </Fragment> 
                        )}

                        {activeStep === 1 && (
                            <Fragment>
                                <Typography variant="h6" gutterBottom>
                                    Divisions Offered
                                </Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="firstName"
                                            name="firstName"
                                            label="First name"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="lastName"
                                            name="lastName"
                                            label="Last name"
                                            fullWidth
                                            autoComplete="family-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="address1"
                                            name="address1"
                                            label="Address line 1"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="address2"
                                            name="address2"
                                            label="Address line 2"
                                            fullWidth
                                            autoComplete="shipping address-line2"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            autoComplete="shipping address-level2"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id="state"
                                            name="state"
                                            label="State/Province/Region"
                                            fullWidth
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="zip"
                                            name="zip"
                                            label="Zip / Postal code"
                                            fullWidth
                                            autoComplete="shipping postal-code"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="country"
                                            name="country"
                                            label="Country"
                                            fullWidth
                                            autoComplete="shipping country"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                            label="Use this address for payment details"
                                        />
                                    </Grid>
                                </Grid>
                            </Fragment> 
                        )}

                        {activeStep === 2 && (
                            <Fragment>
                                <Typography variant="h6" gutterBottom>
                                    Financials
                                </Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="firstName"
                                            name="firstName"
                                            label="First name"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="lastName"
                                            name="lastName"
                                            label="Last name"
                                            fullWidth
                                            autoComplete="family-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="address1"
                                            name="address1"
                                            label="Address line 1"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="address2"
                                            name="address2"
                                            label="Address line 2"
                                            fullWidth
                                            autoComplete="shipping address-line2"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            autoComplete="shipping address-level2"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id="state"
                                            name="state"
                                            label="State/Province/Region"
                                            fullWidth
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="zip"
                                            name="zip"
                                            label="Zip / Postal code"
                                            fullWidth
                                            autoComplete="shipping postal-code"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="country"
                                            name="country"
                                            label="Country"
                                            fullWidth
                                            autoComplete="shipping country"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                            label="Use this address for payment details"
                                        />
                                    </Grid>
                                </Grid>
                            </Fragment> 
                        )}

                        {activeStep === 3 && (
                            <Fragment>
                                <Typography variant="h6" gutterBottom>
                                    Event Summary
                                </Typography>
                                {/* <List disablePadding>
                                    {products.map((product) => (
                                        <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                                            <ListItemText primary={product.name} secondary={product.desc} />
                                            <Typography variant="body2">{product.price}</Typography>
                                        </ListItem>
                                    ))}
                                    <ListItem sx={{ py: 1, px: 0 }}>
                                        <ListItemText primary="Total" />
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                            $34.06
                                        </Typography>
                                    </ListItem>
                                </List> */}
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                            {newEvent?.eventName}
                                        </Typography>
                                        <Typography gutterBottom>{newEvent?.eventClub}</Typography>
                                        <Typography gutterBottom>{newEvent?.description}</Typography>
                                    </Grid>
                                    <Grid item container direction="column" xs={12} sm={6}>
                                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                            Payment details
                                        </Typography>
                                        <Grid container>
                                            <Fragment>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom>Event Date</Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom>{eventDate}</Typography>
                                                </Grid>
                                            </Fragment>
                                            <Fragment>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom>Event Start Time</Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom>{startTime}</Typography>
                                                </Grid>
                                            </Fragment>
                                            <Fragment>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom>Event End Time</Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom>{endTime}</Typography>
                                                </Grid>
                                            </Fragment>
                                            <Fragment>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom>Entry Deadline</Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom>{deadline}</Typography>
                                                </Grid>
                                            </Fragment>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Fragment>
                        )}

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1, display: (activeStep === 0) && 'none' }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}

                            {activeStep === steps.length - 1 
                                ?
                                    <Button onClick={handleFinish} className='forwardBtn'>
                                        Finish
                                    </Button>
                                :
                                    <Button onClick={handleNext} className='forwardBtn'>
                                        {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
                                        Next
                                    </Button>
                            }
                        </Box>
                    </Fragment>
                )}
            </Box>
        </LocalizationProvider>
    )
}