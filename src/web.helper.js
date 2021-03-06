export default class WebHelper 
{
  constructor() 
  {
    throw new Error('This is a static class');
  }

  static isLocalStorage() 
  {
    try 
    {
      return !!window.localStorage;
    }
    catch (e) 
    {
      return true;
    }
  }

  static isSessionStorage() 
  {
    try 
    {
      return !!window.sessionStorage;
    }
    catch (e) 
    {
      return true;
    }
  }

  static getScreenPrint() 
  {
    return "Current Resolution: " + screen.width + "x" + screen.height
      + ", Available Resolution: " + screen.availWidth + "x" + screen.availHeight
      + ", Color Depth: " + screen.colorDepth + ", Device XDPI: " + screen.deviceXDPI +
      ", Device YDPI: " + screen.deviceYDPI;
  }

  static getTimeZone() 
  {
    return String(String(new Date()).split("(")[1]).split(")")[0];
  }
}