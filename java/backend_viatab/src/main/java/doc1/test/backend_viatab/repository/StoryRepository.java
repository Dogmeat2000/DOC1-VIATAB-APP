package doc1.test.backend_viatab.repository;

import doc1.test.backend_viatab.model.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface StoryRepository extends JpaRepository<Story,Long> {
    List<Story> findByDepartmentId(Long deptId);
}