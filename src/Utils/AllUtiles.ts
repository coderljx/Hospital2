
export class AllUtiles {

    /**
     *  时间转化
     * @param Ttime
     */
    public static ParseTime(Ttime: any) : string {
        const time = new Date(Ttime);
        const year = time.getFullYear();
        const Mount = (time.getMonth()) < 10 ? "0" + time.getMonth() : time.getMonth();
        const Day = (time.getDate()) < 10 ? "0" + time.getDate() : time.getDate();
        const Hours = (time.getHours()) < 10 ? "0" + time.getHours() : time.getHours();
        const Min = (time.getMinutes()) < 10 ? "0" + time.getMinutes() : time.getMinutes();
        const Ss = (time.getSeconds()) < 10 ? "0" + time.getSeconds() : time.getSeconds();
        return year + '-' + Mount + '-' + Day + ' ' + Hours + ':' + Min + ":" + Ss;
    }


}
