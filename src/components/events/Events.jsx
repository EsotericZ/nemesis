import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import createEvent from "../../services/events/createEvent";
import createR2Event from "../../services/events/createR2Event";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import './events.css';

const style = {
    modalStyle: { 
        backgroundColor: "var(--card)",
        opacity: '0.9',
        width: "100%",
    },
    contentStyle: {
        width: "60%",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        boxShadow: 24,
        p: 4,
    }
};

const StyledFormControl = styled(FormControl)({
    '& label.Mui-focused': {
        color: 'var(--grey)',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'var(--grey)',
    },
    '& .MuiInputLabel-root': {
        color: 'var(--grey)',
    },
    '& .MuiOutlinedInput-input': {
        color: 'var(--grey)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'var(--grey)',
        },
        '&:hover fieldset': {
            borderColor: 'var(--grey)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'var(--grey)',
        },
    },
});

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

export const Events = () => {
    const axiosPrivate = useAxiosPrivate();
    const tomorrow = dayjs().add(1, 'day').set('hour', 22).startOf('hour');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const [eventName, setEventName] = useState('');
    // const [location, setLocation] = useState('');
    // const [club, setClub] = useState('');
    const [startDate, setStartDate] = useState(dayjs(`${tomorrow}`).format('MM-DD-YYYY'));
    const [endDate, setEndDate] = useState(dayjs(`${tomorrow}`).format('MM-DD-YYYY'));
    // const [director, setDirector] = useState('');
    // const [eventURL, setEventURL] = useState('');
    // const [image, setImage] = useState('');
    // const [description, setDescription] = useState('');
    const [newR2Event, setNewR2Event] = useState({
        eventName: '',
        location: '',
        club: '',
        director: '',
        eventURL: '',
        image: '',
        description: '',
    });

    const handleEventDetails = (e) => {
        const { name, value } = e.target;
        setNewR2Event((prev) => {
            return { ...prev, [name]: value }
        });
        console.log(newR2Event)
    }

    const handleSubmit = async () => {
        try {
            await createEvent(axiosPrivate);
        } catch (err) {
            console.error(err);
        }
    }

    const handleR2Submit = async () => {
        try {
            await createR2Event(axiosPrivate, newR2Event, startDate, endDate);
        } catch (err) {
            console.error(err);
        }
        handleClose();
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={style.modalStyle}
            >
                <Box sx={style.contentStyle}>
                    <StyledFormControl variant="outlined" fullWidth>
                        <StyledTextField
                            required
                            id="eventName"
                            name="eventName"
                            label="Event Name"
                            fullWidth
                            onChange={handleEventDetails}
                        />
                        <TextField
                            required
                            id="location"
                            name="location"
                            label="City, State"
                            fullWidth
                            className='r2Form'
                            onChange={handleEventDetails}
                        />
                        <TextField
                            required
                            id="club"
                            name="club"
                            label="Club"
                            fullWidth
                            className='r2Form'
                            onChange={handleEventDetails}
                        />
                        <div>
                            <StyledDatePicker
                                id='startDate'
                                name='startDate'
                                label='Start Date'
                                defaultValue={tomorrow}
                                disablePast
                                className='r2Form'
                                views={['year', 'month', 'day']}
                                sx={{ 
                                    svg: {color: 'white'},
                                    input: {color: 'white'},
                                    width: '49.5%',
                                    float: 'left'
                                }}
                                onChange={(newDate) => {
                                    setStartDate(dayjs(newDate).format('MM-DD-YYYY'))
                                }}
                            />
                            <StyledDatePicker
                                id='endDate'
                                name='endDate'
                                label='End Date'
                                defaultValue={tomorrow}
                                disablePast
                                className='r2Form'
                                views={['year', 'month', 'day']}
                                sx={{ 
                                    svg: {color: 'white'},
                                    input: {color: 'white'},
                                    width: '49.5%',
                                    float: 'right'
                                }}
                                onChange={(newDate) => {
                                    setEndDate(dayjs(newDate).format('MM-DD-YYYY'))
                                }}
                            />
                        </div>
                        <TextField
                            required
                            id="director"
                            name="director"
                            label="Tournament Director"
                            fullWidth
                            className='r2Form'
                            onChange={handleEventDetails}
                        />
                        <TextField
                            required
                            id="eventURL"
                            name="eventURL"
                            label="Event Link"
                            fullWidth
                            className='r2Form'
                            onChange={handleEventDetails}
                        />
                        <TextField
                            id="image"
                            name="image"
                            label="Event Image"
                            fullWidth
                            className='r2Form'
                            onChange={handleEventDetails}
                        />
                        <TextField
                            id="description"
                            name="description"
                            label="Description"
                            fullWidth
                            className='r2Form'
                            onChange={handleEventDetails}
                        />
                        <Button 
                            className='r2Btn'
                            onClick={handleR2Submit}
                            color='inherit'
                            label="Create Event"
                        >
                            Create Event
                        </Button>
                    </StyledFormControl>
                </Box>
            </Modal>
            <Box sx={{ width: '85%', ml:'auto', mr:'auto' }} className='eventPage'>
                <Typography className='eventTitle'>
                    Events
                </Typography>
                <Button 
                    className='eventBtn'
                    onClick={handleSubmit}
                >
                    New Nemesis
                </Button>
                <Button 
                    className='eventBtn'
                    onClick={handleOpen}
                >
                    New R2
                </Button>
            </Box>
        </LocalizationProvider>
    )
}