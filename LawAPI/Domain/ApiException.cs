namespace LawAPI.Domain
{
    public class ApiException : Exception
    {
        public int StatusCode { get; set; }
    }
}
