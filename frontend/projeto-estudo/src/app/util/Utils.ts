import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

/**
 * An utility service for date.
 */
@Injectable()
export class Utils {

  private static pattern = 'yyyy-MM-dd';

  private static datePipe: DatePipe = new DatePipe('en');

  constructor() {
  }

  /**
   * Method to convert the date time from server into JS date object
   */
  static convertDateTimeFromServer(date: any) {
    if (date) {
      return new Date(date);
    } else {
      return null;
    }
  }

  /**
   * Method to convert the date from server into JS date object
   */
  static convertLocalDateFromServer(date: any) {
    if (date) {
      const dateString = date.split('-');
      return new Date(dateString[0], dateString[1] - 1, dateString[2]);
    }
    return null;
  }

  /**
   * Method to convert the JS date object into specified date pattern
   */
  static convertLocalDateToServer(date: any, pattern = this.pattern) {
    if (date) {
      const newDate = new Date(date);
      return this.datePipe.transform(newDate, pattern);
    } else {
      return null;
    }
  }

  /**
   * Method to get the default date pattern
   */
  static dateformat() {
    return this.pattern;
  }

  // TODO Change this method when moving from datetime-local input to NgbDatePicker
  static toDate(date: any): Date | null {
    if (date === undefined || date === null) {
      return null;
    }
    const dateParts = date.split(/\D+/);
    if (dateParts.length === 7) {
      return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4], dateParts[5], dateParts[6]);
    }
    if (dateParts.length === 6) {
      return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4], dateParts[5]);
    }
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4]);
  }


  // TODO Change this method when moving from datetime-local input to NgbDatePicker
  static isNullOrUndefinedOrEmpty(data: any): boolean {
    if (data === undefined || data === null || data === '' || data == 'null') {
      return true;
    }
    return false;
  }


}
