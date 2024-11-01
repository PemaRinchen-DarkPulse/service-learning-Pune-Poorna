import React, { useState } from 'react';
import CustomeButton from './CustomeButton';

export const CreateEvents = () => {
  return (
    <>
      <Basic />
      <Location />
      <EventDescription />
    </>
  );
};

const UserInput = ({ text, type = 'text', placeholder = '' }) => (
  <div className="mb-3">
    <label className="form-label">{text}</label>
    <input type={type} className="form-control" placeholder={placeholder} />
  </div>
);

const Timing = ({ label, inputAType, inputBType, InputAid, InputBid }) => (
  <div className="col-6">
    <label className="form-label">{label}</label>
    <div className="d-flex">
      <input type={inputAType} className="form-control me-2" id={InputAid} />
      <input type={inputBType} className="form-control" id={InputBid} />
    </div>
  </div>
);

const Dropdown = ({ label, options = [] }) => (
  <div className="col-4">
    <label className="form-label">{label}</label>
    <select className="form-select">
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export const Basic = () => {
  const [showRepeatingEvents, setShowRepeatingEvents] = useState(false);
  const [showTimeSlot, setShowTimeSlot] = useState(false);

  return (
    <div className="row">
      <div className="col-3">
        <SideBar />
      </div>
      <div className="col">
        <form>
          <UserInput text="Event Name" />
          <UserInput text="Event Display" />
          <div className="mb-3">
            <label>Event Visibility</label>
            <div className="d-flex justify-content-start">
              <div>Public</div>
              <div>Private</div>
            </div>
          </div>
          <div className="row">
            <Timing label="Start Date & Time" inputAType="date" InputAid="startDate" inputBType="time" InputBid="startTime" />
            <Timing label="End Date & Time" inputAType="date" InputAid="endDate" inputBType="time" InputBid="endTime" />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="repeatingEventCheck" onChange={() => setShowRepeatingEvents(!showRepeatingEvents)} />
            <label className="form-check-label" htmlFor="repeatingEventCheck">This is a repeating event</label>
          </div>

          {showRepeatingEvents && (
            <>
              <Dropdown label="Repeat Frequency" options={[
                { value: 'daily', label: 'Daily' },
                { value: 'weekly', label: 'Weekly' },
                { value: 'alternate', label: 'Every Alternate Week' },
                { value: 'custom', label: 'Custom' },
              ]} />
              <RepeatingEvents setShowTimeSlot={setShowTimeSlot} />
            </>
          )}
          <CustomeButton text="Next" />
          {showTimeSlot && <TimeSlotManager />}
        </form>
      </div>
    </div>
  );
};

export const RepeatingEvents = ({ setShowTimeSlot }) => (
  <div className="row">
    <UserInput text="From Time" type="time" />
    <UserInput text="To Time" type="time" />
    <Dropdown label="Ends On the" options={[
      { value: 'sameDay', label: 'Same Day' },
      { value: 'nextDay', label: 'Next Day' },
      { value: '3rdDay', label: '3rd Day' },
      { value: '4thDay', label: '4th Day' },
      { value: '5thDay', label: '5th Day' },
    ]} />
    <div className="form-check mb-3">
      <input type="checkbox" className="form-check-input" id="timeSlotCheck" onChange={(e) => setShowTimeSlot(e.target.checked)} />
      <label className="form-check-label" htmlFor="timeSlotCheck">This event has time slots</label>
    </div>
  </div>
);

export const TimeSlotManager = () => {
  const [timeSlots, setTimeSlots] = useState([{ from: '', to: '' }]);

  const handleTimeSlotChange = (index, field, value) => {
    const updatedSlots = [...timeSlots];
    updatedSlots[index][field] = value;
    setTimeSlots(updatedSlots);
  };

  const addTimeSlot = () => setTimeSlots([...timeSlots, { from: '', to: '' }]);
  const removeTimeSlot = (index) => timeSlots.length > 1 && setTimeSlots(timeSlots.filter((_, i) => i !== index));

  return (
    <>
      {timeSlots.map((slot, index) => (
        <div className="row mb-3" key={index}>
          <UserInput type="time" text="From" placeholder="Start Time" value={slot.from} onChange={(e) => handleTimeSlotChange(index, 'from', e.target.value)} />
          <UserInput type="time" text="To" placeholder="End Time" value={slot.to} onChange={(e) => handleTimeSlotChange(index, 'to', e.target.value)} />
          <div className="col-4 d-flex align-items-center">
            <button type="button" className="btn btn-primary me-2" onClick={addTimeSlot}>+</button>
            {timeSlots.length > 1 && <button type="button" className="btn btn-danger" onClick={() => removeTimeSlot(index)}>X</button>}
          </div>
        </div>
      ))}
    </>
  );
};

const SideBar = () => <h1>Side Bar</h1>;

export const Location = () => {
  const [visibleComponent, setVisibleComponent] = useState(null);
  const toggleComponent = (component) => setVisibleComponent((prev) => (prev === component ? null : component));

  return (
    <div className="row">
      <div className="col-3">
        <SideBar />
      </div>
      <div className="col">
        <form>
          <h1>Location</h1>
          <UserInput text="Enter Address" />
          <div className="row mb-3">
            <div className="col-6">
              <span onClick={() => toggleComponent('manualLocation')} style={{ cursor: 'pointer', color: 'blue' }}>Enter Location Manually</span>
            </div>
            <div className="col-6">
              <span onClick={() => toggleComponent('notDecidedVenue')} style={{ cursor: 'pointer', color: 'blue' }}>Not Decided Venue</span>
            </div>
          </div>
          {visibleComponent === 'manualLocation' && <ManualLocation onClose={() => toggleComponent('manualLocation')} />}
          {visibleComponent === 'notDecidedVenue' && <NotDecidedVenue onClose={() => toggleComponent('notDecidedVenue')} />}
          <div className="d-flex">
            <CustomeButton text="Previous" />
            <CustomeButton text="Next" />
          </div>
        </form>
      </div>
    </div>
  );
};

const ManualLocation = ({ onClose }) => (
  <>
    <UserInput text="Event Venue" />
    <UserInput text="Street Lane 1" />
    <UserInput text="Street Lane 2" />
    <UserInput text="City" />
    <span onClick={onClose} style={{ cursor: 'pointer', color: 'blue' }}>Reset Location</span>
  </>
);

const NotDecidedVenue = ({ onClose }) => (
  <>
    <UserInput text="City" />
    <span onClick={onClose} style={{ cursor: 'pointer', color: 'blue' }}>Venue decided?</span>
  </>
);

export const EventDescription = () => (
  <div className="row">
    <div className="col-3">
      <SideBar />
    </div>
    <div className="col">
      <h1>Event Description</h1>
      <form>
        <UserInput text="Event Description" />
        <UserInput text="Event Type" />
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="showContactInfoCheck" />
          <label className="form-check-label" htmlFor="showContactInfoCheck">Show Contact Information</label>
        </div>
        <CustomeButton text="Next" />
      </form>
    </div>
  </div>
);

export default CreateEvents;
