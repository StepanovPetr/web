 public void ChangeRemoteEntitiesToModified()
        {
            var changedEntriesCopy = Context.ChangeTracker.Entries()
                                            .Where(e => e.State == EntityState.Deleted)
                                            .ToList();

            foreach (var entry in changedEntriesCopy)
                entry.State = EntityState.Modified;
        }