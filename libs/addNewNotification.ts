export interface notification {
  time: string;
  info: string;
  html?: string;
}

export function addNewNotification(newNotification: notification): notification[]{
   if(localStorage.getItem('notifications')){
    const existingNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    existingNotifications.unshift(newNotification)
    localStorage.setItem('notifications', JSON.stringify(existingNotifications))
  }else{
    localStorage.setItem('notifications', JSON.stringify([newNotification]));
  }
  return JSON.parse(localStorage.getItem('notifications') || '[]')
}