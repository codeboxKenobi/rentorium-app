// Клон
export const deepClone = ( payload: object ) => {
    return JSON.parse( JSON.stringify( payload ))
}


export default class DateTimeHandler {
    getDayOfYear(date: Date): number {
      const now = date.getTime();
  
      const yearStartFrom = this.getFirstDateOfYear(date).getTime();
  
      return Math.ceil((now - yearStartFrom) / 1000 / 3600 / 24);
    }
  
    getNumberOfFirstWeekOfYear(date: Date): number {
      const firstDayOfMonth = this.getFirstDateOfMonth(date);
  
      const dayOfYear = this.getDayOfYear(firstDayOfMonth);
  
      return Math.ceil(dayOfYear / 7);
    }
  
    computeDaysWithOffset(date: Date): Date[] {
      const startOffset = !this.getFirstDateOfMonth(date).getDay()
        ? 0
        : this.getFirstDateOfMonth(date).getDay() - 1;
  
      const daysInMonth = this.getLastDateOfMonth(date).getDate();
  
      /** 7*6 - days displayed via designer calendar size */
      const endOffset = 7 * 6 - daysInMonth - startOffset;
  
      let dates: Date[] = [];
  
      /** Fill start offset days */
      for (let i = startOffset; i > 0; i--) {
        dates.push(new Date(date.getFullYear(), date.getMonth(), 1 - i));
      }
  
      /** Fill moths days */
      for (let i = 1; i <= daysInMonth; i++) {
        dates.push(new Date(date.getFullYear(), date.getMonth(), i));
      }
  
      /** Fill end offset days */
      for (let i = 0; i < endOffset; i++) {
        dates.push(new Date(date.getFullYear(), date.getMonth() + 1, 1 + i));
      }
  
      return dates;
    }
  
    getLastDateOfMonth(date: Date): Date {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
  
    getFirstDateOfMonth(date: Date): Date {
      return new Date(date.getFullYear(), date.getMonth(), 1);
    }
  
    getFirstDateOfYear(date: Date): Date {
      return new Date(date.getFullYear(), 0, 1);
    }
  }