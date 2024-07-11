import React, { useState, useEffect, useCallback } from 'react';
import DateRangePickerComp from './component/Date/DateRangePickerComp';
import TableReview from './component/TableReview/TableReview';
import SearchBar from './component/SearchBar/SearchBar';
import RatingFilter from './component/FilterComponent/RatingFilter';
import SentimentFilter from './component/FilterComponent/SentimentFilter';
import LocationFilter from './component/FilterComponent/LocationFilter';
import './Feature1.css';
import data from './data';

function Feature1() {
    const [reviews, setReviews] = useState([]);
    const [filteredReviews, setFilteredReviews] = useState([]);
    const [dateRange, setDateRange] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [selectedSentiment, setSelectedSentiment] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const filterReviews = useCallback(() => {
        let filteredData = reviews;

        if (dateRange) {
            filteredData = filteredData.filter(review =>
                new Date(review.date) >= dateRange.startDate && new Date(review.date) <= dateRange.endDate
            );
        }

        if (searchQuery) {
            const lowerCaseQuery = searchQuery.toLowerCase();
            filteredData = filteredData.filter(review =>
                (review.userName && review.userName.toLowerCase().includes(lowerCaseQuery)) ||
                (review.location && review.location.toLowerCase().includes(lowerCaseQuery)) ||
                (review.comment && review.comment.toLowerCase().includes(lowerCaseQuery))
            );
        }

        if (selectedRating) {
            filteredData = filteredData.filter(review => review.rating === selectedRating);
        }

        if (selectedSentiment) {
            filteredData = filteredData.filter(review => review.sentiment === selectedSentiment);
        }

        if (selectedLocation) {
            filteredData = filteredData.filter(review => review.location === selectedLocation);
        }

        setFilteredReviews(filteredData);
    }, [dateRange, searchQuery, selectedRating, selectedSentiment, selectedLocation, reviews]);

    useEffect(() => {
        setReviews(data);
        filterReviews();
    }, [filterReviews]);

    useEffect(() => {
        filterReviews(); 
    }, [dateRange, searchQuery, selectedRating, selectedSentiment, selectedLocation, reviews, filterReviews]);

    useEffect(() => {
        const today = new Date();
        const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
        const lastSevenDays = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        setDateRange({
            startDate: lastSevenDays,
            endDate: yesterday
        });
    }, []);

    const handleDateRangeSelect = (range) => {
        setDateRange(range);
    };

    const handleSearchSubmit = (query) => {
        setSearchQuery(query);
    };

    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
    };

    const handleSentimentChange = (sentiment) => {
        setSelectedSentiment(sentiment);
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    const handleExportCSV = () => {
        const csvRows = [];
        const headers = ['Date', 'User Name', 'Rating', 'Score', 'Comment', 'Location'];
        csvRows.push(headers.join(','));

        filteredReviews.forEach(review => {
            const values = [review.date, review.userName, review.rating, review.score, review.comment, review.location];
            csvRows.push(values.map(value => `"${value}"`).join(','));
        });

        const csvContent = `data:text/csv;charset=utf-8,${csvRows.join('\n')}`;
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'User Review.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    

    return (
        <div style={{ position: 'relative' }}>
            <div className="date-container" style={{ position: 'relative' }}>
                <DateRangePickerComp applyMaxDate={true} onSelectDateRange={handleDateRangeSelect} />
                <SearchBar onSearchSubmit={handleSearchSubmit} />
                <button className="export-button" onClick={handleExportCSV}> <i className="fa fa-download" aria-hidden="true"></i> Export</button>
            </div>
            <div className="filter-container" style={{ position: 'relative' }}>
                <RatingFilter onChange={handleRatingChange} />
                <SentimentFilter onChange={handleSentimentChange} />
                <LocationFilter onChange={handleLocationChange} />
                {/* Add applied filters display */}
            </div>
            <div style={{ position: 'relative', zIndex: 0, marginTop: '20px' }}>
                <TableReview rows={filteredReviews} />
            </div>
        </div>
    );
}

export default Feature1;
