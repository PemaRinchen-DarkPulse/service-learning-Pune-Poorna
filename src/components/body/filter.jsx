import React from 'react';
import './style.css'; // We'll define styles separately

const filters = [
  { label: "This Weekend", icon: "📅", colorClass: "weekend" },
  { label: "Free", icon: "⭐", colorClass: "free" },
  { label: "This Week", icon: "📅", colorClass: "week" },
  { label: "This Month", icon: "📅", colorClass: "month" },
  { label: "Tomorrow", icon: "📅", colorClass: "tomorrow" },
  { label: "Today", icon: "📅", colorClass: "today" }
];

const FilterButtons = () => {
  return (
    <div className="filter-container">
      <h2>Quickly filter events by</h2>
      <div className="filter-buttons">
        {filters.map((filter, index) => (
          <button key={index} className={`filter-button ${filter.colorClass}`}>
            <span className="icon">{filter.icon}</span>
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
