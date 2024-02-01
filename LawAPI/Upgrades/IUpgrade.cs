using ISession = NHibernate.ISession;

namespace LawAPI.Upgrades
{
    public interface IUpgrade
    {
        int Number { get; }
        void Execute(ISession session);
    }
}
