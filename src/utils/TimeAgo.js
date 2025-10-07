export default function timeAgo(dateParam){

    if (!dateParam) {
        return null;
    }

    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();


    if (seconds < 5) {
        return 'agora';
    } else if (seconds < 60) {
        return `há ${seconds} segundos`;
    } else if (seconds < 90) {
        return 'há cerca de um minuto';
    } else if (minutes < 60) {
        return `há ${minutes} minutos`;
    } else if (isToday) {
        return getFormattedDate(date, 'Hoje'); // Hoje às 10:20
    } else if (isYesterday) {
        return getFormattedDate(date, 'Ontem'); // Ontem às 10:20
    } else if (isThisYear) {
        return getFormattedDate(date, false, true); // 10 de Janeiro às 10:20
    }
    

    return getFormattedDate(date); // 10. January 2017. at 10:20
}

const MONTH_NAMES = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];



function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
    const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const monthNum = date.getMonth()+1;
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
        // Adding leading zero to minutes
        minutes = `0${minutes}`;
    }

    if (prefomattedDate) {
        // Today at 10:20
        // Yesterday at 10:20
        return `${prefomattedDate} as ${hours}:${minutes}`;
    }

    if (hideYear) {
        // 10. January at 10:20
        //return `${day}. ${month} at ${hours}:${minutes}`;
        return `${day}. ${month}`;
    }

    // 10. January 2017. at 10:20
    //`${day}. ${month} ${year}. as ${hours}:${minutes}`
    return `${day}/${monthNum}/${year} ${hours}:${minutes}`;
}